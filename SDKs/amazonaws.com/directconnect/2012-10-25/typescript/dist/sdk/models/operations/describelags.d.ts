import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLagsXAmzTargetEnum {
    OvertureServiceDescribeLags = "OvertureService.DescribeLags"
}
export declare class DescribeLagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLagsXAmzTargetEnum;
}
export declare class DescribeLagsRequest extends SpeakeasyBase {
    headers: DescribeLagsHeaders;
    request: shared.DescribeLagsRequest;
}
export declare class DescribeLagsResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    lags?: shared.Lags;
    statusCode: number;
}
