import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=editContent" })
  editContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
