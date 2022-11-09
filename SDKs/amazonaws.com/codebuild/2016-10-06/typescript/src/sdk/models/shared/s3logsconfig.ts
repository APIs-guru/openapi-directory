import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketOwnerAccessEnum } from "./bucketowneraccessenum";
import { LogsConfigStatusTypeEnum } from "./logsconfigstatustypeenum";


// S3LogsConfig
/** 
 *  Information about S3 logs for a build project. 
**/
export class S3LogsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketOwnerAccess" })
  bucketOwnerAccess?: BucketOwnerAccessEnum;

  @Metadata({ data: "json, name=encryptionDisabled" })
  encryptionDisabled?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=status" })
  status: LogsConfigStatusTypeEnum;
}
