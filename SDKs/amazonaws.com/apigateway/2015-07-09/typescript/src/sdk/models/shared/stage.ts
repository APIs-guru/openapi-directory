import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=accessLogSettings" })
  accessLogSettings?: AccessLogSettings;

  @Metadata({ data: "json, name=cacheClusterEnabled" })
  cacheClusterEnabled?: boolean;

  @Metadata({ data: "json, name=cacheClusterSize" })
  cacheClusterSize?: CacheClusterSizeEnum;

  @Metadata({ data: "json, name=cacheClusterStatus" })
  cacheClusterStatus?: CacheClusterStatusEnum;

  @Metadata({ data: "json, name=canarySettings" })
  canarySettings?: CanarySettings;

  @Metadata({ data: "json, name=clientCertificateId" })
  clientCertificateId?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=documentationVersion" })
  documentationVersion?: string;

  @Metadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=methodSettings", elemType: shared.MethodSetting })
  methodSettings?: Map<string, MethodSetting>;

  @Metadata({ data: "json, name=stageName" })
  stageName?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=tracingEnabled" })
  tracingEnabled?: boolean;

  @Metadata({ data: "json, name=variables" })
  variables?: Map<string, string>;

  @Metadata({ data: "json, name=webAclArn" })
  webAclArn?: string;
}
