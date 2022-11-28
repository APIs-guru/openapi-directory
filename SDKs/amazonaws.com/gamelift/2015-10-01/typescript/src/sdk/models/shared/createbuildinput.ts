import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { S3Location } from "./s3location";
import { Tag } from "./tag";



// CreateBuildInput
/** 
 * Represents the input for a request operation.
**/
export class CreateBuildInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=StorageLocation" })
  storageLocation?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
