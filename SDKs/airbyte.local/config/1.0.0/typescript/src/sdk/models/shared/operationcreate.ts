import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatorConfiguration } from "./operatorconfiguration";


export class OperationCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=operatorConfiguration" })
  operatorConfiguration: OperatorConfiguration;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
