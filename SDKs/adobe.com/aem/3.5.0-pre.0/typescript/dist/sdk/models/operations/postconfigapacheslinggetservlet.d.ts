import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigApacheSlingGetServletQueryParams extends SpeakeasyBase {
    enableHtml?: boolean;
    enableHtmlAtTypeHint?: string;
    enableTxt?: boolean;
    enableTxtAtTypeHint?: string;
    enableXml?: boolean;
    enableXmlAtTypeHint?: string;
    jsonMaximumresults?: string;
    jsonMaximumresultsAtTypeHint?: string;
}
export declare class PostConfigApacheSlingGetServletRequest extends SpeakeasyBase {
    queryParams: PostConfigApacheSlingGetServletQueryParams;
}
export declare class PostConfigApacheSlingGetServletResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
