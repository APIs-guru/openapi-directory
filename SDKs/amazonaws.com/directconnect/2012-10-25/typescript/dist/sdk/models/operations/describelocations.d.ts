import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLocationsXAmzTargetEnum {
    OvertureServiceDescribeLocations = "OvertureService.DescribeLocations"
}
export declare class DescribeLocationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationsXAmzTargetEnum;
}
export declare class DescribeLocationsRequest extends SpeakeasyBase {
    headers: DescribeLocationsHeaders;
}
export declare class DescribeLocationsResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    locations?: shared.Locations;
    statusCode: number;
}
