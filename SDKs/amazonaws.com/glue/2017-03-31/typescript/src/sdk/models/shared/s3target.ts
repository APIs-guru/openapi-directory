import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Target
/** 
 * Specifies a data store in Amazon Simple Storage Service (Amazon S3).
**/
export class S3Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionName" })
  connectionName?: string;

  @Metadata({ data: "json, name=Exclusions" })
  exclusions?: string[];

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=SampleSize" })
  sampleSize?: number;
}
