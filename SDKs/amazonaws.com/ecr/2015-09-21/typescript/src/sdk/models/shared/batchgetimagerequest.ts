import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageIdentifier } from "./imageidentifier";


export class BatchGetImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptedMediaTypes" })
  acceptedMediaTypes?: string[];

  @Metadata({ data: "json, name=imageIds", elemType: shared.ImageIdentifier })
  imageIds: ImageIdentifier[];

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}
