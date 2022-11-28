import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatorConfiguration } from "./operatorconfiguration";



export class OperationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId: string;

  @SpeakeasyMetadata({ data: "json, name=operatorConfiguration" })
  operatorConfiguration: OperatorConfiguration;
}
