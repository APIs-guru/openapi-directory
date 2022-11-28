import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyDbInstanceActionEnum {
    ModifyDbInstance = "ModifyDBInstance"
}

export enum GetModifyDbInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbInstanceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbInstanceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CACertificateIdentifier" })
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" })
  dbInstanceClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewDBInstanceIdentifier" })
  newDbInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PromotionTier" })
  promotionTier?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbInstanceVersionEnum;
}


export class GetModifyDbInstanceHeaders extends SpeakeasyBase {
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


export class GetModifyDbInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyDbInstanceQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyDbInstanceHeaders;
}


export class GetModifyDbInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
