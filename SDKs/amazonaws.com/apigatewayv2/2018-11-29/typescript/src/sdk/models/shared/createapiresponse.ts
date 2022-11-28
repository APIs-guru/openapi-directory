import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cors } from "./cors";
import { ProtocolTypeEnum } from "./protocoltypeenum";



export class CreateApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiEndpoint" })
  apiEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ApiId" })
  apiId?: string;

  @SpeakeasyMetadata({ data: "json, name=ApiKeySelectionExpression" })
  apiKeySelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=CorsConfiguration" })
  corsConfiguration?: Cors;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DisableSchemaValidation" })
  disableSchemaValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ImportInfo" })
  importInfo?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ProtocolType" })
  protocolType?: ProtocolTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RouteSelectionExpression" })
  routeSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=Warnings" })
  warnings?: string[];
}
