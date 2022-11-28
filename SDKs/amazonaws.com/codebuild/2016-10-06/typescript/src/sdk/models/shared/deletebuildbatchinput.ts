import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBuildBatchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
