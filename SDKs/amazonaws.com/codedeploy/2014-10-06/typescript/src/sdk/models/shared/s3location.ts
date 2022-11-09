import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BundleTypeEnum } from "./bundletypeenum";


// S3Location
/** 
 * Information about the location of application artifacts stored in Amazon S3.
**/
export class S3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=bundleType" })
  bundleType?: BundleTypeEnum;

  @Metadata({ data: "json, name=eTag" })
  eTag?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
