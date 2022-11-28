import { SpeakeasyBase } from "../../../internal/utils";
import { AccessLogSettings } from "./accesslogsettings";
import { RouteSettings } from "./routesettings";
export declare class GetStageResponse extends SpeakeasyBase {
    accessLogSettings?: AccessLogSettings;
    apiGatewayManaged?: boolean;
    autoDeploy?: boolean;
    clientCertificateId?: string;
    createdDate?: Date;
    defaultRouteSettings?: RouteSettings;
    deploymentId?: string;
    description?: string;
    lastDeploymentStatusMessage?: string;
    lastUpdatedDate?: Date;
    routeSettings?: Map<string, RouteSettings>;
    stageName?: string;
    stageVariables?: Map<string, string>;
    tags?: Map<string, string>;
}
