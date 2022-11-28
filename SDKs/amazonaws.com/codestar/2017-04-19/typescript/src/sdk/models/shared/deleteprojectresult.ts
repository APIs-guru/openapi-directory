import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn?: string;

  @SpeakeasyMetadata({ data: "json, name=stackId" })
  stackId?: string;
}
