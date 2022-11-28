import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAssociateTrunkInterfaceActionEnum {
    AssociateTrunkInterface = "AssociateTrunkInterface"
}

export enum GetAssociateTrunkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateTrunkInterfaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateTrunkInterfaceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BranchInterfaceId" })
  branchInterfaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GreKey" })
  greKey?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrunkInterfaceId" })
  trunkInterfaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateTrunkInterfaceVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VlanId" })
  vlanId?: number;
}


export class GetAssociateTrunkInterfaceHeaders extends SpeakeasyBase {
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


export class GetAssociateTrunkInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssociateTrunkInterfaceQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssociateTrunkInterfaceHeaders;
}


export class GetAssociateTrunkInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
