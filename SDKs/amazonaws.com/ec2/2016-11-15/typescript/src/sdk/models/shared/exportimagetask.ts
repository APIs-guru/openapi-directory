import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportTaskS3Location } from "./exporttasks3location";
import { Tag } from "./tag";



// ExportImageTask
/** 
 * Describes an export image task.
**/
export class ExportImageTask extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  exportImageTaskId?: string;

  @SpeakeasyMetadata()
  imageId?: string;

  @SpeakeasyMetadata()
  progress?: string;

  @SpeakeasyMetadata()
  s3ExportLocation?: ExportTaskS3Location;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
