import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AssociateAlias20200531PathParams extends SpeakeasyBase {
    targetDistributionId: string;
}
export declare class AssociateAlias20200531QueryParams extends SpeakeasyBase {
    alias: string;
}
export declare class AssociateAlias20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateAlias20200531Request extends SpeakeasyBase {
    pathParams: AssociateAlias20200531PathParams;
    queryParams: AssociateAlias20200531QueryParams;
    headers: AssociateAlias20200531Headers;
}
export declare class AssociateAlias20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
