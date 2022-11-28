import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetServerHealthServerList = [
	"http://localhost:8080",
] as const;


export class GetServerHealth200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dependencies", elemType: shared.ServiceDependency })
  dependencies?: shared.ServiceDependency[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}


export class GetServerHealthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;
}


export class GetServerHealthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getServerHealth200ApplicationJsonObject?: GetServerHealth200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
