import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageIdentifier } from "./imageidentifier";


export class StartImageScanRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageId" })
  imageId: ImageIdentifier;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
