import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Warning
/** 
 * <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
**/
export class Warning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
