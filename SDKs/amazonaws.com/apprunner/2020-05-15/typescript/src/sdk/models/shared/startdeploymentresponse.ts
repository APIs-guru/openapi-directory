import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartDeploymentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperationId" })
  operationId: string;
}
