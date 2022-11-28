import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskImageFormatEnum } from "./diskimageformatenum";
import { ExportTaskS3Location } from "./exporttasks3location";
import { Tag } from "./tag";



export class ExportImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  diskImageFormat?: DiskImageFormatEnum;

  @SpeakeasyMetadata()
  exportImageTaskId?: string;

  @SpeakeasyMetadata()
  imageId?: string;

  @SpeakeasyMetadata()
  progress?: string;

  @SpeakeasyMetadata()
  roleName?: string;

  @SpeakeasyMetadata()
  s3ExportLocation?: ExportTaskS3Location;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
