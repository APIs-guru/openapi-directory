import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of key:value pairs associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.
**/
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
