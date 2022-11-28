import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";
import { LogsConfigStatusTypeEnum } from "./logsconfigstatustypeenum";



// S3LogsConfig
/** 
 *  Information about S3 logs for a build project. 
**/
export class S3LogsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketOwnerAccess" })
  bucketOwnerAccess?: BucketOwnerAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionDisabled" })
  encryptionDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: LogsConfigStatusTypeEnum;
}
