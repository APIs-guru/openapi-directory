import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetWithdrawByoipCidrActionEnum {
    WithdrawByoipCidr = "WithdrawByoipCidr"
}

export enum GetWithdrawByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetWithdrawByoipCidrQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetWithdrawByoipCidrActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Cidr" })
  cidr: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetWithdrawByoipCidrVersionEnum;
}


export class GetWithdrawByoipCidrHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetWithdrawByoipCidrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWithdrawByoipCidrQueryParams;

  @SpeakeasyMetadata()
  headers: GetWithdrawByoipCidrHeaders;
}


export class GetWithdrawByoipCidrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
