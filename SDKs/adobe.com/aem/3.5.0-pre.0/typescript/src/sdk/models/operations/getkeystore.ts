import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetKeystorePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=authorizableId" })
  authorizableId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=intermediatePath" })
  intermediatePath: string;
}


export class GetKeystoreRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetKeystorePathParams;
}


export class GetKeystoreResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getKeystoreDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
