import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListCuratedEnvironmentImagesXAmzTargetEnum {
    CodeBuild20161006ListCuratedEnvironmentImages = "CodeBuild_20161006.ListCuratedEnvironmentImages"
}
export declare class ListCuratedEnvironmentImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCuratedEnvironmentImagesXAmzTargetEnum;
}
export declare class ListCuratedEnvironmentImagesRequest extends SpeakeasyBase {
    headers: ListCuratedEnvironmentImagesHeaders;
    request: Map<string, any>;
}
export declare class ListCuratedEnvironmentImagesResponse extends SpeakeasyBase {
    contentType: string;
    listCuratedEnvironmentImagesOutput?: shared.ListCuratedEnvironmentImagesOutput;
    statusCode: number;
}
