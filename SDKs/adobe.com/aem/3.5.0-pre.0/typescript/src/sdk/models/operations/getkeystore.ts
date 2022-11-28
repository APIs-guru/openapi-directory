import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetKeystorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizableId" })
  authorizableId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intermediatePath" })
  intermediatePath: string;
}


export class GetKeystoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetKeystorePathParams;
}


export class GetKeystoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getKeystoreDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
