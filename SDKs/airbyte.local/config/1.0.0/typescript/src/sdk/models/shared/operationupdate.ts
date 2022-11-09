import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatorConfiguration } from "./operatorconfiguration";


export class OperationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=operationId" })
  operationId: string;

  @Metadata({ data: "json, name=operatorConfiguration" })
  operatorConfiguration: OperatorConfiguration;
}
