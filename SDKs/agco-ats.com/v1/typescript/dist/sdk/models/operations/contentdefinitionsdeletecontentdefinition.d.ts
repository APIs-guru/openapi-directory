import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentDefinitionsDeleteContentDefinitionPathParams extends SpeakeasyBase {
    contentDefinitionId: number;
}
export declare class ContentDefinitionsDeleteContentDefinitionRequest extends SpeakeasyBase {
    pathParams: ContentDefinitionsDeleteContentDefinitionPathParams;
}
export declare class ContentDefinitionsDeleteContentDefinitionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
