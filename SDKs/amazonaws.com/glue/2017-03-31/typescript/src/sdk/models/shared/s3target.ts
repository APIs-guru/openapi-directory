import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Target
/** 
 * Specifies a data store in Amazon Simple Storage Service (Amazon S3).
**/
export class S3Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=Exclusions" })
  exclusions?: string[];

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=SampleSize" })
  sampleSize?: number;
}
