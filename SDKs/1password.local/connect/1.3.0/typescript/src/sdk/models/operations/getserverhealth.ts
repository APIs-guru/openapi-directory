import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETSERVERHEALTH_SERVERS = [
	"http://localhost:8080",
];



export class GetServerHealthRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;
}


export class GetServerHealth200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=dependencies", elemType: shared.ServiceDependency })
  dependencies?: shared.ServiceDependency[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=version" })
  version: string;
}


export class GetServerHealthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServerHealth200ApplicationJsonObject?: GetServerHealth200ApplicationJson;

  @Metadata()
  statusCode: number;
}
