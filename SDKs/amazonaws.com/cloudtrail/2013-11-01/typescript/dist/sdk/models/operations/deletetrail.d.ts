import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail"
}
export declare class DeleteTrailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTrailXAmzTargetEnum;
}
export declare class DeleteTrailRequest extends SpeakeasyBase {
    headers: DeleteTrailHeaders;
    request: shared.DeleteTrailRequest;
}
export declare class DeleteTrailResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteTrailResponse?: Map<string, any>;
    insufficientDependencyServiceAccessPermissionException?: any;
    invalidHomeRegionException?: any;
    invalidTrailNameException?: any;
    notOrganizationMasterAccountException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    trailNotFoundException?: any;
    unsupportedOperationException?: any;
}
