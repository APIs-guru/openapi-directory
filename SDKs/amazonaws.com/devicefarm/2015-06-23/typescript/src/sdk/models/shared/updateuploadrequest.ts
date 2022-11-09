import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=editContent" })
  editContent?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
