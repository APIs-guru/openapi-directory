import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperationId" })
  operationId: string;
}
