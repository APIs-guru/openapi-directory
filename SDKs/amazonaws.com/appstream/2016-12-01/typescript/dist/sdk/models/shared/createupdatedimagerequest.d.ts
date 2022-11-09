import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateUpdatedImageRequest extends SpeakeasyBase {
    dryRun?: boolean;
    existingImageName: string;
    newImageDescription?: string;
    newImageDisplayName?: string;
    newImageName: string;
    newImageTags?: Map<string, string>;
}
