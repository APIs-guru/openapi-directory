import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BundleTypeEnum } from "./bundletypeenum";



// S3Location
/** 
 * Information about the location of application artifacts stored in Amazon S3.
**/
export class S3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=bundleType" })
  bundleType?: BundleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=eTag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
