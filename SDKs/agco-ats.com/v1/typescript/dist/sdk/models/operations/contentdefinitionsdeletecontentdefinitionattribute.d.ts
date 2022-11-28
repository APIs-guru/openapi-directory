import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentDefinitionsDeleteContentDefinitionAttributePathParams extends SpeakeasyBase {
    contentDefinitionAttributeId: number;
}
export declare class ContentDefinitionsDeleteContentDefinitionAttributeRequest extends SpeakeasyBase {
    pathParams: ContentDefinitionsDeleteContentDefinitionAttributePathParams;
}
export declare class ContentDefinitionsDeleteContentDefinitionAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
