import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatorConfiguration } from "./operatorconfiguration";



export class OperationCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=operatorConfiguration" })
  operatorConfiguration: OperatorConfiguration;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId: string;
}
