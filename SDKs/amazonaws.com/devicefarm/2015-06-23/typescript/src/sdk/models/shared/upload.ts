import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadCategoryEnum } from "./uploadcategoryenum";
import { UploadStatusEnum } from "./uploadstatusenum";
import { UploadTypeEnum } from "./uploadtypeenum";


// Upload
/** 
 * An app or a set of one or more tests to upload or that have been uploaded.
**/
export class Upload extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=category" })
  category?: UploadCategoryEnum;

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: UploadStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: UploadTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
