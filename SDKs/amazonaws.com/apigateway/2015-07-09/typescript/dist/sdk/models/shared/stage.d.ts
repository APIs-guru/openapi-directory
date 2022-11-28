import { SpeakeasyBase } from "../../../internal/utils";
import { AccessLogSettings } from "./accesslogsettings";
import { CacheClusterSizeEnum } from "./cacheclustersizeenum";
import { CacheClusterStatusEnum } from "./cacheclusterstatusenum";
import { CanarySettings } from "./canarysettings";
import { MethodSetting } from "./methodsetting";
/**
 * <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a> </div>
**/
export declare class Stage extends SpeakeasyBase {
    accessLogSettings?: AccessLogSettings;
    cacheClusterEnabled?: boolean;
    cacheClusterSize?: CacheClusterSizeEnum;
    cacheClusterStatus?: CacheClusterStatusEnum;
    canarySettings?: CanarySettings;
    clientCertificateId?: string;
    createdDate?: Date;
    deploymentId?: string;
    description?: string;
    documentationVersion?: string;
    lastUpdatedDate?: Date;
    methodSettings?: Map<string, MethodSetting>;
    stageName?: string;
    tags?: Map<string, string>;
    tracingEnabled?: boolean;
    variables?: Map<string, string>;
    webAclArn?: string;
}
