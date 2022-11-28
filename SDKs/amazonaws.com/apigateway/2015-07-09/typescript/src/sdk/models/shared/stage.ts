import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLogSettings } from "./accesslogsettings";
import { CacheClusterSizeEnum } from "./cacheclustersizeenum";
import { CacheClusterStatusEnum } from "./cacheclusterstatusenum";
import { CanarySettings } from "./canarysettings";
import { MethodSetting } from "./methodsetting";



// Stage
/** 
 * <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a> </div>
**/
export class Stage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLogSettings" })
  accessLogSettings?: AccessLogSettings;

  @SpeakeasyMetadata({ data: "json, name=cacheClusterEnabled" })
  cacheClusterEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cacheClusterSize" })
  cacheClusterSize?: CacheClusterSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=cacheClusterStatus" })
  cacheClusterStatus?: CacheClusterStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=canarySettings" })
  canarySettings?: CanarySettings;

  @SpeakeasyMetadata({ data: "json, name=clientCertificateId" })
  clientCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=documentationVersion" })
  documentationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=methodSettings", elemType: MethodSetting })
  methodSettings?: Map<string, MethodSetting>;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=tracingEnabled" })
  tracingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=variables" })
  variables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=webAclArn" })
  webAclArn?: string;
}
