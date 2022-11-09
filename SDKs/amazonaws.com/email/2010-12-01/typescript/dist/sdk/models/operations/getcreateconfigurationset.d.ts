import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateConfigurationSetActionEnum {
    CreateConfigurationSet = "CreateConfigurationSet"
}
/**
 * <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
**/
export declare class GetCreateConfigurationSetConfigurationSet extends SpeakeasyBase {
    name: string;
}
export declare enum GetCreateConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetCreateConfigurationSetQueryParams extends SpeakeasyBase {
    action: GetCreateConfigurationSetActionEnum;
    configurationSet: GetCreateConfigurationSetConfigurationSet;
    version: GetCreateConfigurationSetVersionEnum;
}
export declare class GetCreateConfigurationSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateConfigurationSetRequest extends SpeakeasyBase {
    queryParams: GetCreateConfigurationSetQueryParams;
    headers: GetCreateConfigurationSetHeaders;
}
export declare class GetCreateConfigurationSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
