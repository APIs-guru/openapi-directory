import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisassociateTrunkInterfaceActionEnum {
    DisassociateTrunkInterface = "DisassociateTrunkInterface"
}

export enum GetDisassociateTrunkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisassociateTrunkInterfaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateTrunkInterfaceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateTrunkInterfaceVersionEnum;
}


export class GetDisassociateTrunkInterfaceHeaders extends SpeakeasyBase {
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


export class GetDisassociateTrunkInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisassociateTrunkInterfaceQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisassociateTrunkInterfaceHeaders;
}


export class GetDisassociateTrunkInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
