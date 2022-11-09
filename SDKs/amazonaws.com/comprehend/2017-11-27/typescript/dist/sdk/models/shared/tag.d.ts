import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department.
**/
export declare class Tag extends SpeakeasyBase {
    key: string;
    value?: string;
}
