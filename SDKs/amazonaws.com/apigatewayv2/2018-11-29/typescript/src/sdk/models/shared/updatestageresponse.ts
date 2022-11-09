import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessLogSettings } from "./accesslogsettings";
import { RouteSettings } from "./routesettings";
import { RouteSettings } from "./routesettings";


export class UpdateStageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessLogSettings" })
  accessLogSettings?: AccessLogSettings;

  @Metadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @Metadata({ data: "json, name=AutoDeploy" })
  autoDeploy?: boolean;

  @Metadata({ data: "json, name=ClientCertificateId" })
  clientCertificateId?: string;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DefaultRouteSettings" })
  defaultRouteSettings?: RouteSettings;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastDeploymentStatusMessage" })
  lastDeploymentStatusMessage?: string;

  @Metadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=RouteSettings", elemType: shared.RouteSettings })
  routeSettings?: Map<string, RouteSettings>;

  @Metadata({ data: "json, name=StageName" })
  stageName?: string;

  @Metadata({ data: "json, name=StageVariables" })
  stageVariables?: Map<string, string>;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
