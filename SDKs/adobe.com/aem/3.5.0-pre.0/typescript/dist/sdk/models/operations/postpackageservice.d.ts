import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPackageServiceQueryParams extends SpeakeasyBase {
    cmd: string;
}
export declare class PostPackageServiceRequest extends SpeakeasyBase {
    queryParams: PostPackageServiceQueryParams;
}
export declare class PostPackageServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postPackageServiceDefaultTextXmlString?: string;
}
