import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFieldLevelEncryptionProfileConfig20181105PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Id" })
  id: string;
}


export class GetFieldLevelEncryptionProfileConfig20181105Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetFieldLevelEncryptionProfileConfig20181105Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFieldLevelEncryptionProfileConfig20181105PathParams;

  @Metadata()
  headers: GetFieldLevelEncryptionProfileConfig20181105Headers;
}


export class GetFieldLevelEncryptionProfileConfig20181105Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
