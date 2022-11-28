import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLogSettings } from "./accesslogsettings";
import { RouteSettings } from "./routesettings";



export class UpdateStageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessLogSettings" })
  accessLogSettings?: AccessLogSettings;

  @SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoDeploy" })
  autoDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ClientCertificateId" })
  clientCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultRouteSettings" })
  defaultRouteSettings?: RouteSettings;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastDeploymentStatusMessage" })
  lastDeploymentStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=RouteSettings", elemType: RouteSettings })
  routeSettings?: Map<string, RouteSettings>;

  @SpeakeasyMetadata({ data: "json, name=StageName" })
  stageName?: string;

  @SpeakeasyMetadata({ data: "json, name=StageVariables" })
  stageVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
