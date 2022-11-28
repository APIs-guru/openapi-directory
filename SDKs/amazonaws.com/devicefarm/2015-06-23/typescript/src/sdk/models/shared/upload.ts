import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadCategoryEnum } from "./uploadcategoryenum";
import { UploadStatusEnum } from "./uploadstatusenum";
import { UploadTypeEnum } from "./uploadtypeenum";



// Upload
/** 
 * An app or a set of one or more tests to upload or that have been uploaded.
**/
export class Upload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: UploadCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UploadStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UploadTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
